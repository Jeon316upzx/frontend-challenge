"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  website: z.string(),
  linkedIn: z.string(),
  industry: z.string(),
  description: z.string(),
  goals: z.string(),
  headquarters: z.string(),
});

const CompanyDetailsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      website: "",
      linkedIn: "",
      industry: "",
      description: "",
      goals: "",
      headquarters: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-10">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&#39;s Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sixteen Inc" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&#39;s Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://sixteen.life/" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&#39;s LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.linkedin.com/company/sixteenlife"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&#39;s Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="Digital Wellbeing" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-rows-2 gap-10 mt-10 ">
              <div className="flex flex-col">
                <span className="text-sm font-medium"> Employee Count </span>
                <div className="flex flex-row mt-4">
                  <Badge>0-10</Badge>
                  <Badge variant="outline" className="mx-2 px-2 py-2">
                    10-100
                  </Badge>
                  <Badge variant="outline" className="mx-2">
                    100-500
                  </Badge>
                  <Badge variant="outline" className="mx-2">
                    1000+
                  </Badge>
                </div>
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Description </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Redesign your digital life, reduce your screen time"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your company goals? </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Help everyone be more conscious of where they are spending time"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="headquarters"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Headquarters </FormLabel>
                    <FormControl>
                      <Input placeholder="Delhi, India" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          
        </form>
      </Form>
    </div>
  );
};

export default CompanyDetailsForm;
