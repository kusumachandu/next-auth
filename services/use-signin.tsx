import axios from "axios";
import { useMutation } from "react-query";

type SigninTypes = {
  email: string,
  password: string
}

async function signIn(input: SigninTypes) {
  try {
    console.log(input);
    // const { data } = axios.post('http://localhost:4000/api/')
  }
  catch(error: any) {
    console.log(error.message)
  }
}


export const useSignInMutation = () => {
  return useMutation((input: SigninTypes) => signIn(input), {
    onSuccess: (data) => {
      console.log(data);
    }
  })
}
