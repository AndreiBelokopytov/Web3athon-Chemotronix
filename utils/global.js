export const BASE_URL = "https://api.web3.storage";
export const Subscribed = () => {
  if (window) {
    localStorage.setItem("Chemotronix Subscription", true);
  }
};
export const SubscriptionCheck = () => {
  if (window) {
    if (localStorage.getItem("Chemotronix Subscription")) {
      return true;
    } else {
      return false;
    }
  }
};
