import MagicLink from "@/auth/magicLink";
import { supabaseClient } from "@/services/supabase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();

  // If the user is already logged in, redirect to the home page ->
  useEffect(() => {
    if (supabaseClient.auth.user()) {
      navigate("/cloud");
    }
  }, [navigate]);

  return (
    <>
      <MagicLink />
    </>
  );
};

export default Login;
