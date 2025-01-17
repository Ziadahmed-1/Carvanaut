import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Button } from "./ui/button";

type option = {
  name: string;
  icon: React.ReactNode;
  action?: () => void;
};

const DropdownMenuDemo = ({
  title,
  data,
  userName,
}: {
  title: React.ReactNode | string;
  data: option[];
  userName: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {userName && (
          <>
            <DropdownMenuLabel> {userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuGroup>
          {data.map((item) => (
            <DropdownMenuItem key={item.name} onClick={item.action}>
              {item.name}
              <DropdownMenuShortcut> {item.icon}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuDemo;
