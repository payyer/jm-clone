import { Outlet } from "react-router";
import { AppSidebar } from "../app-sidebar";
import { SidebarProvider } from "../ui/sidebar";

export default function DashboardLayout() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                }
            }
        >
            <AppSidebar variant="inset" />
            <Outlet />
        </SidebarProvider>
    )
}
