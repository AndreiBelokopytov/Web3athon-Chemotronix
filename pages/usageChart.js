import React from "react";

function usageChart() {
  const visuals = [
    "https://thingspeak.com/channels/1803223/charts/1?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/charts/2?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/charts/3?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/charts/4?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/charts/5?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/charts/6?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/charts/7?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/charts/8?bgcolor=%23fffff&color=%234ad4a1&dynamic=true&results=60&type=line&update=15",

    "https://thingspeak.com/channels/1803223/maps/channel_show",

    "https://thingspeak.com/channels/1803223/widgets/520503",

    "https://thingspeak.com/channels/1803223/widgets/520505",

    "https://thingspeak.com/channels/1803223/widgets/520506",

    "https://thingspeak.com/channels/1803223/widgets/520508",

    "https://thingspeak.com/channels/1803223/widgets/520509",
  ];
  return (
    <div className="py-3 bg-cus">
      <h2 className="flex  justify-center text-[25px] mb-20">Usgae Charts</h2>
      <div className="md:grid hidden xl:grid-cols-3  px-5 bg-cus lg:grid-cols-2 grid-cols-1 gap-6 mx-auto">
        {visuals.map((chart,i) => {
          return (
            <div key={i} className="rounded-lg shadow-lg  w-fit">
              <iframe
                src={chart}
                frameBorder="1"
                height={"400px"}
                width={"500px"}
                className="rounded"
              ></iframe>
            </div>
          );
        })}
        </div>
      <div className="grid md:hidden xl:grid-cols-3  px-5  lg:grid-cols-2 grid-cols-1 gap-6 w-[86%] mx-auto">
        {visuals.map((chart,i) => {
          return (
            <div key={i} className="rounded-lg shadow-lg  w-fit">
              <iframe
                src={chart}
                frameBorder="1"
                height={"400px"}
                width={"100%"}
                className="rounded"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default usageChart;
