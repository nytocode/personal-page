"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      reset();
      toast.success("Email send successfully!", { duration: 3000 });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Try again!", { duration: 3000 });
    }
  };

  return (
    <form
      className="flex flex-col gap-4 py-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col flex-1 gap-1">
          <label>First Name</label>
          <input
            className="bg-background text-foreground border-[1px] border-foreground outline-foreground px-2 py-1 rounded-md"
            {...register("first_name", { required: true })}
          />
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <label>Last Name</label>
          <input
            className="bg-background text-foreground border-[1px] border-foreground outline-foreground px-2 py-1 rounded-md"
            {...register("last_name", { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label>Email</label>
        <input
          className="bg-background text-foreground border-[1px] border-foreground outline-foreground px-2 py-1 rounded-md"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
          })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Message</label>
        <textarea
          className="h-[200px] bg-background text-foreground border-[1px] border-foreground outline-foreground px-2 py-1 rounded-md"
          {...register("message", { required: true })}
        />
      </div>
      <button
        className="bg-foreground text-background rounded-md font-bold py-2 md:hover:scale-105 transition md:w-1/3"
        type="submit"
      >
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
