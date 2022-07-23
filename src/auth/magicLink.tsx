import { useState } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { PaperPlaneTilt } from "phosphor-react";
import { supabaseClient } from "@/services/supabase";
import toast from "react-hot-toast";
import { toastStyle } from "@/theme/toast";

const MagicLink = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast("Email is required", {
        icon: "🤔",
        style: toastStyle,
      });
    } else {
      setLoading(true);
      try {
        await supabaseClient.auth.signIn({
          email,
        });
        toast("Magic link sent", {
          icon: "🎉",
          style: toastStyle,
        });
        setStatus(true);
      } catch (error) {
        toast("An error occurred while sending the link", {
          icon: "😢",
          style: toastStyle,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mb="3">
        <FormLabel>Email address:</FormLabel>
        <Input
          type="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <Button
        type="submit"
        colorScheme="gray"
        leftIcon={<PaperPlaneTilt />}
        isLoading={loading}
        loadingText="Sending..."
      >
        {status ? "Resend magic link" : "Send magic link"}
      </Button>
    </form>
  );
};

export default MagicLink;
