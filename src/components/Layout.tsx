import type { Session } from "@supabase/supabase-js";
import { FC } from "react";
import { Outlet } from "react-router";
import "../App.css";
import ChatUsersPanel from "../components/Chat/UsersPanel";
import TopBar from "../components/Profile/TopBar";
import SwitcherPanel from "../components/SwitcherPanel";
import UserProfile from "../types/UserProfileObject";

interface LayoutProps {
  session: Session | null;
  profileObject: UserProfile;
}

const App: FC<LayoutProps> = ({ session, profileObject }) => {
  return (
    <div className="wrapper">
      <TopBar profile={profileObject} session={session}></TopBar>
      <SwitcherPanel></SwitcherPanel>
      <Outlet></Outlet>
      <ChatUsersPanel></ChatUsersPanel>
    </div>
  );
};
export default App;
