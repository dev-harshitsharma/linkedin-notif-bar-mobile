import React from "react";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationsCountSelector,
} from "../state/atoms";

const NotifBar = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messageAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const totalNotif = useRecoilValue(totalNotificationsCountSelector);
  return (
    <>
      <div className="grid items-center h-screen">
        <div className="bg-slate-400 flex justify-center flex-row space-x-1">
          <button className="border-2 p-1 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Home
          </button>
          <button className="border-2 p-1 rounded-md border-black m-2 bg-white hover:bg-green-300">
            My Network (
            {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}
            )
          </button>
          <button className="border-2 p-1 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Jobs ({jobsCount})
          </button>
          <button
            onClick={() => {
              setMessageCount(messageCount + 1);
            }}
            className="border-2 p-1 rounded-md border-black m-2 bg-white hover:bg-green-300"
          >
            Messaging ({messageCount})
          </button>
          <button className="border-2 p-1 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Notifications ({notificationCount})
          </button>
          <button className="border-2 p-1 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Me ({totalNotif})
          </button>
        </div>
      </div>
    </>
  );
};

export default NotifBar;
