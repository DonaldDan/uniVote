import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function RepresentativeForm() {
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append text data
    formData.append("name", data.name);
    formData.append("party", data.party);
    formData.append("ward", data.ward);
    formData.append("manifesto", data.manifesto);

    // Append image file if exists
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/representatives`, // ✅ Full URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Representative created successfully");
      reset(); // clear the form
      setImage(null);
    } catch (err) {
      console.error("Error creating representative:", err.response || err);
      toast.error("Failed to create representative");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-md max-w-md mx-auto">
      <Input placeholder="Name" {...register("name", { required: true })} />
      <Input placeholder="Party" {...register("party", { required: true })} />
      <Input placeholder="Ward" {...register("ward", { required: true })} />
      <textarea
        placeholder="Manifesto"
        {...register("manifesto", { required: true })}
        className="w-full p-2 border rounded"
      />
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <Button type="submit">Create Representative</Button>
    </form>
  );
}
