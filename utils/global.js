export const BASE_URL = "https://api.web3.storage";
import { toast } from "react-toastify";
export const Subscribed = () => {
  if (window) {
    localStorage.setItem("Chemotronix Subscription", true);
  }
};
export const storeUniqueId = (id) => {
  if (window) {
    localStorage.setItem("Chemotronix-user-id", id);
  }
};
export const getUniqueId = () => {
  if (window) {
    if (localStorage.getItem("Chemotronix-user-id")) {
      return localStorage.getItem("Chemotronix-user-id");
    } else {
      toast.error("Unable to get your unique id");
    }
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
