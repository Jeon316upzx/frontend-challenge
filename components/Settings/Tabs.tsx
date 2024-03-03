"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadProfileImage from "./UploadprofilePicture";
import CompanyDetailsForm from "./Form";

const MyTabs = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-full lg:hidden">
        <TabsList>
          <TabsTrigger value="account">Your Profile</TabsTrigger>
          <TabsTrigger value="info">Company Info</TabsTrigger>
          <TabsTrigger value="seats">Manage Seats</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <UploadProfileImage />
          <CompanyDetailsForm />
        </TabsContent>
        <TabsContent value="info">Change your password here.</TabsContent>
        <TabsContent value="seats">Change your password here.</TabsContent>
      </Tabs>

      <Tabs defaultValue="account" className="w-full hidden lg:block">
        <TabsList>
          <TabsTrigger value="account">Your Profile</TabsTrigger>
          <TabsTrigger value="info">Company Info</TabsTrigger>
          <TabsTrigger value="seats">Manage Seats</TabsTrigger>
          <TabsTrigger value="contact">Do not Contact</TabsTrigger>
          <TabsTrigger value="integrations">Integrations </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <UploadProfileImage />
          <CompanyDetailsForm />
        </TabsContent>
        <TabsContent value="info">Change your password here.</TabsContent>
        <TabsContent value="seats">Change your password here.</TabsContent>
        <TabsContent value="contact">Change your password here.</TabsContent>
        <TabsContent value="integrations">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyTabs;
