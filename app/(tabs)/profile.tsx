import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Link } from "expo-router";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="Log Out" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>Log In</Text>
        </Link>
      )}
    </View>
  );
};

export default Page;
