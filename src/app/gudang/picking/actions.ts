"use server";

import { redirect } from "next/navigation";
import { tandaiTerambil } from "../request/actions";

export async function tandaiTerambilDariPicking(formData: FormData) {
  await tandaiTerambil(formData);
  redirect("/gudang/picking?berhasil=1");
}