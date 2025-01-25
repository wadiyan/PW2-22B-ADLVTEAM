import { createClient } from "@supabase/supabase-js";

const bucket = "Adlv-assets";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

if (!url || !key) {
  throw new Error("Supabase URL or Key is missing in environment variables");
}

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
if(!data) throw new Error("Image upload failed");

return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};


