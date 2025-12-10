"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Send } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
})

export function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter.",
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start space-x-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="relative">
                    <Input 
                      placeholder="Enter your email" 
                      {...field} 
                      className="pr-10 bg-secondary border-0 focus-visible:ring-primary focus-visible:ring-2"
                    />
                    <Button 
                      type="submit" 
                      size="icon" 
                      className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8 bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={form.formState.isSubmitting}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
