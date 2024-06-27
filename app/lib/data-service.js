import { supabase } from "./supabase";

export const getCourts = async function () {
  const { data, error } = await supabase.from("courts").select("*");
  if (error) {
    console.log(error);
  }
  return data;
};
