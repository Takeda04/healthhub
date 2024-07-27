import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import Main from "./screens/main"; 
import Start from "./screens/start";


export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

  }, [router]);



  return !loading ? <Start/> : <Main />;
}


