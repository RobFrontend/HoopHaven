import { supabase } from "./supabase";

export const getCourts = async function () {
  const { data, error } = await supabase.from("courts").select("*");
  if (error) {
    console.log(error);
  }

  return data;
};

export const getCourt = async function (id) {
  const { data, error } = await supabase
    .from("courts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.log(error);
  }

  return data;
};
