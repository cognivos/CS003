import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-ui/sidebar/app-sidebar";

const RootLayout = ({  children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
          <SidebarProvider>
            <AppSidebar />
            {children}
          </SidebarProvider>
      </body>
    </html>
  );
}

export default RootLayout;