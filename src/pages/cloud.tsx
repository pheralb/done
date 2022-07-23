import { useEffect } from "react";
import { supabaseClient } from "@/services/supabase";
import { useNavigate } from "react-router-dom";

const Cloud = () => {
  const navigate = useNavigate();

  // Check if the user is logged in ->
  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      }
    });
  }, [navigate]);

  return <div>Cloud</div>;
};

export default Cloud;
