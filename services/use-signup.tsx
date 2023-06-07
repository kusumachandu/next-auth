import axios from "axios";
import { useMutation } from "react-query";

type SigninTypes = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

async function signUp(input: SigninTypes) {
  try {
    const { data } = await axios.post('http://localhost:4000/api/users', input);

    console.log(data)
  }
  catch(error: any) {
    console.log(error.message)
  }
}


export const useSignuUpMutation = () => {
  return useMutation((input: SigninTypes) => signUp(input), {
    onSuccess: (data) => {
      console.log(data);
      window.location.href="/login"
    }
  })
}
