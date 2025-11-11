import { Metadata } from "next";

import FollowersPage from "@/components/pages/followers";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Followers() {
  return (
    <div>
      <FollowersPage />
    </div>
  );
}
