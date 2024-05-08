import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "newtworkAtom",
  default: 104,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 3,
});
export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 14,
});

export const totalNotificationsCountSelector = selector({
  key: "totalnotifCount",
  get: ({ get }) => {
    const newtworkCount = get(networkAtom);
    const jobsCount = get(jobsAtom);
    const messageCount = get(messageAtom);
    const notificationCount = get(notificationsAtom);

    return newtworkCount + jobsCount + messageCount + notificationCount;
  },
});
