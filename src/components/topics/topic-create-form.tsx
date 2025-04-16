"use client";
import { useActionState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import * as actions from "@/actions";

const TopicCreateForm = () => {
  const [formState, action] = useActionState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">New Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="w-100" sideOffset={10} align="end">
        <form className="grid gap-4" action={action}>
          <h4 className="font-medium leading-none">Create a Topic</h4>
          <div className=" space-y-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Name your topic"
                className="col-span-2 h-8"
              />
              <p className="text-destructive">
                {formState.errors.name?.join(", ")}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Describe your topic"
                className="col-span-2 h-8"
              />
              <p className="text-destructive">
                {formState.errors.description?.join(", ")}
              </p>
            </div>
          </div>

          <Button type="submit">Submit</Button>
          <p className="text-destructive">
            {formState.errors._form?.join(", ")}
          </p>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
