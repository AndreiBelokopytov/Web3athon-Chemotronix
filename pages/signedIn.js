import Head from "next/head";
import Navbar from "../components/Navbar";
import style from "../styles/signedIn.module.css";
import * as RiIcons from "react-icons/ri";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Image from "next/image";
import empty from "../images/empty.svg";
import Footer from "../components/Footer";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useSigner } from "wagmi";
import Wmenu from "../components/Wmenu";
import { ethers, Contract } from "ethers";
import axios from "axios";
import { BASE_URL, Subscribed, SubscriptionCheck } from "../utils/global";
import { useRouter } from "next/router";
import connectContract from "../utils/connectContract";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import ColoredCard from "../components/ColoredCard";
import { chemotronixContract } from "../contracts/chemotronix";

const industryTypes = [
  ["Energy", 0],
  ["Agriculture", 1],
  ["Land Use Change", 2],
  ["Industrial Processes", 3],
  ["Waste", 4],
];

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/dear-ore/chemotronix",
  cache: new InMemoryCache(),
});

const config = {
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENBOTRiNERGRkYxZDMzMjYxOUVhZjMxRTBjRTlDNzNCYjI4QzJERTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjIyMTgxMDg5ODksIm5hbWUiOiJUZXN0IDAyIn0.hEHqeerV5xEWU9OLXhZPXup1EaATXJlLVDzAX4fz0CU",
  },
};

function SignedIn() {
  const { data: signer } = useSigner();

  const contract = useMemo(
    () =>
      new Contract(
        chemotronixContract.address,
        chemotronixContract.abi,
        signer
      ),
    [signer]
  );
  useEffect(() => {
    if (SubscriptionCheck() == true) {
      setIsSubscribed(true);
    }
  }, []);

  const account = useAccount().address;
  const { disconnect } = useDisconnect();
  const [buyCarbon, setBuyCarbon] = useState(false);
  const [showUsage, setShowUsage] = useState(false);
  const [devices, setDevices] = useState(null);
  const router = useRouter();
  const [sub, setSub] = useState(false);
  const [iot, setIot] = useState();
  const [deposit, setDeposit] = useState();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [dataGraph, setDataGraph] = useState(null);
  const [graphAddress, setGraphAddress] = useState(account);
  const [selectedIndustryType, selectIndustryType] = useState(
    industryTypes[0][1]
  );

  const openSubcribe = () => {
    setSub(!sub);
  };

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            registers {
              id
              subStatus
              uniqueID
              registrationTime
            }
          }
        `,
      })
      .then((res) => {
        setDataGraph(res.data.registers);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [account]);

  const createEvent = async (cid) => {
    try {
      const rsvpContract = connectContract();

      if (rsvpContract) {
        let eventDataCID = cid;

        const txn = await rsvpContract.subscribe(deposit, eventDataCID);
        console.log("Minting...", txn.hash);
        console.log("Minted -- ", txn.hash);
        Subscribed();
        setIsSubscribed(true);
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      console.log(error, "err");
    }
  };
  async function handleSubscribe(e) {
    e.preventDefault();

    const body = {
      iot: iot,
      deposit: deposit,
    };

    try {
      await contract.register(
        ethers.utils.formatBytes32String(iot),
        selectedIndustryType,
        {
          value: ethers.utils.parseEther("1.0"),
        }
      );
      setSub(false);
    } catch (error) {
      console.error(error);
    }
  }

  const toggleBuyCarbon = () => {
    setBuyCarbon(!buyCarbon);
  };

  const carbonData = useCallback(() => {
    axios
      .get(
        `${BASE_URL}/user/uploads?before=2020-07-27T17%3A32%3A28Z&page=1&size=10`,
        config
      )
      .then((response) => {
        console.log(response);
        let arr = [];
        response?.data.map((ob, i) => {
          return arr.push({
            deviceId: ob.name.slice(19),
            dataLink: ob.cid + ".ipfs.w3s.link",
          });
        });
        setDevices([...arr]);
        console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    carbonData();
  }, [carbonData]);

  const handleChangeIndustryType = useCallback((evt) => {
    selectIndustryType(evt.target.value);
  }, []);

  const isSubscribeFormValid =
    iot !== undefined && typeof iot === "string" && iot.trim() !== "";

  // useEffect(() => {
  //   if (cidArray) {
  //     getUsers();
  //   }
  // }, [cidArray]);

  // function getUsers() {
  //   cidArray.map((e) => {
  //     return axios
  //       .get(`https://api.web3.storage/user/uploads/${e}`, config)
  //       .then((response) => {
  //         console.log(response, "res");
  //         newArr.push(response.data.name);
  //         setUsers([...users, ...newArr]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // }
  // useEffect(() => {
  //   console.log(users);
  // }, [users]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div>
        <Head>
          <title>Chemotronix</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <div className={style.bg}></div>
        <main className="flex justify-center ">
          <div className="container px-5">
            <Navbar />

            <div className="mt-24">
              {sub && (
                <div
                  id="authentication-modal"
                  tabIndex="-1"
                  aria-hidden="true"
                  className=" bg-white fixed justify-center items-center flex top-0 h-full right-0 left-0 z-50 w-full h-modal"
                >
                  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/* Modal content  */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        onClick={openSubcribe}
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="authentication-modal"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                      <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                          Subscribe to our platform
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubscribe}>
                          <div>
                            <input
                              type="text"
                              name="ioT"
                              onChange={(e) => setIot(e.target.value)}
                              id="ioT"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="unique IoT"
                              required
                            />
                          </div>
                          <div>
                            <select
                              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              onChange={handleChangeIndustryType}
                            >
                              {industryTypes.map(([name, id]) => (
                                <option
                                  key={id}
                                  value={id}
                                  selected={id === selectIndustryType}
                                >
                                  {name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            type="submit"
                            disabled={!isSubscribeFormValid}
                            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* modal */}

              <div className="container flex flex-col overflow-x-hidden lg:flex-row justify-center">
                <div className="lg:w-9/12 flex flex-col md:flex-row overflow-hidden">
                  <div className="w-36 h-36 mb-5 mr-5 md:mb-0 bg-yellow-400 rounded-full justify-center flex">
                    <p className="text-center text-6xl my-auto">I</p>
                  </div>
                  <div className="flex flex-col justify-center ">
                    <p>Welcome,</p>

                    {account ? (
                      <div className="flex ">
                        <Wmenu
                          account={account}
                          disconnect={() => disconnect()}
                        />
                        <div
                          className="bg-[#008036] cursor-pointer ml-4 px-3 py-1 rounded-md text-white"
                          onClick={openSubcribe}
                          disabled={isSubscribed}
                        >
                          {isSubscribed ? "Subscribed" : "Subscribe"}
                        </div>
                      </div>
                    ) : (
                      <ConnectButton />
                    )}

                    <h1 className="text-4xl md:text-6xl font-bold"></h1>
                  </div>
                </div>
                <div className="hidden lg:w-1/2 lg:flex lg:justify-end items-center">
                  <div className="bg-green-800 h-16 rounded-md cursor-pointer px-12 flex items-center">
                    <p
                      onClick={() => router.push("/usageChart")}
                      className=" text-white"
                    >
                      Usage Chart
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div className="container flex flex-col lg:flex-row justify-center">
                <div className="lg:w-1/2 flex flex-col">
                  <div className="flex"></div>
                  <div className="flex my-5 flex-wrap">
                    <p className=" text-green-800 mr-3 ">Wallet Address :</p>
                    <p className=" text-green-800 font-bold"> {account}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:flex lg:justify-end items-center">
                  {account && (
                    <div className=" relative w-auto">
                      <div
                        className="bg-slate-50 border-4 cursor-pointer border-green-200 rounded-lg px-8 py-2 flex  justify-center items-center"
                        onClick={toggleBuyCarbon}
                      >
                        <p className="mr-4">Buy carbon credit</p>
                        <RiIcons.RiArrowDropDownLine className="text-6xl" />
                      </div>
                      {buyCarbon && (
                        <div className="absolute top-[90px] w-full">
                          <div className="bg-slate-50 w-full border-2 cursor-pointer py-6 border-slate-50 border-t-green-800">
                            <ul className="flex flex-col w-full justify-center items-center">
                              <Link href={"/sendToken"}>
                                <li className=" py-3 hover:bg-slate-300 w-full text-center">
                                  Send Token
                                </li>
                              </Link>
                              <Link href={"/buyToken"}>
                                <li className=" py-3 hover:bg-slate-300 w-full text-center">
                                  Buy carbon credit
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="bg-green-200 mt-4 h-32 rounded-xl flex justify-around items-center">
                <p className=" text-green-800">Registration Time</p>
                <p className=" text-green-800">Subscription Status</p>
                <p className=" text-green-800">Unique ID</p>
              </div>
              {dataGraph && (
                <div className="mt-10 ml-7">
                  <div className="bg-white mt-4 h-32 rounded-xl flex justify-around items-center">
                    <p className=" text-green-800">
                      <ColoredCard
                        text={dataGraph[dataGraph.length - 1].registrationTime}
                      />
                    </p>
                    <p className=" text-green-800">
                      <ColoredCard
                        text={dataGraph[dataGraph.length - 1]?.subStatus}
                      />
                    </p>
                    <p className=" text-green-800">
                      <ColoredCard
                        text={dataGraph[dataGraph.length - 1].uniqueID}
                      />
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-20">
                {dataGraph == null && (
                  <div className=" h-auto border-dashed rounded-lg border-2 px-3 border-slate-300">
                    <div className=" flex  flex-col w-100 items-center justify-around ">
                      <Image
                        src={empty}
                        height={450}
                        width={450}
                        alt={"empty data"}
                      />
                      <p className=" font-extrabold text-slate-500 mt-[-30px] md:mt-[-50px] pb-16">
                        No data!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <div className="flex flex-col items-center relative">
          <div className="container">
            <Footer></Footer>
          </div>
          <div className="bg-[#E9F4FB] h-24 w-full bottom-0 absolute z-[-1]"></div>
        </div>
      </div>
    )
  );
}

export default SignedIn;
