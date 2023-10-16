import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails } from "../../types";
import { createContext, useEffect, useState } from "react";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";

type UserContextTypes = {
  accessToken: String | null;
  user: User | null;
  UserDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextTypes | undefined>(
  undefined,
);

interface props {
  [propName: string]: any;
}
export const MyUserContextProvider = (props: props) => {
    const {
        session,
        isLoading: UserIsLoading,
        supabaseClient: supabase,
    } = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const getUserDetails = () => {
        supabase.from("users").select("*").single();
    };
    const getSubscription = () => {
        supabase
            .from("subscriptions")
            .select("*,prices(*,products(*))")
            .in("status", ["trialing", "active"])
            .single();
    };
    
    useEffect(() => {
        if (user && !isLoadingData && !userDetails && !subscription) {
            setIsLoadingData(true)
            Promise.allSettled([getUserDetails(), getSubscription()]).then((results) => {
                const UserDetailsPromise = results[0]
                const SubscriptionPromise = results[1]

                if (UserDetailsPromise.status === "fulfilled") {
                   setUserDetails(UserDetailsPromise.value.data as UserDetails)
                }
                if (SubscriptionPromise.status === 'fulfilled') {
                    setSubscription(SubscriptionPromise.value.data as Subscription)
                }
                setIsLoadingData(false)


           });
       }else if(!isLoadingData && !isLoadingUser)
   },[])

  return <UserContext.Provider value={}></UserContext.Provider>;
};
