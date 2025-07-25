import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function RepresentativeForm() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => formData.append(key, val));
    if (image) formData.append("image", image);

    try {
      const res = await axios.post("/api/representatives", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success("Representative created successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create representative");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Name" {...register("name")} />
      <Input placeholder="Party" {...register("party")} />
      <Input placeholder="Ward" {...register("ward")} />
      <textarea placeholder="Manifesto" {...register("manifesto")} className="w-full p-2 border rounded" />
      <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <Button type="submit">Create Representative</Button>
    </form>
  );
}
