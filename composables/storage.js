export const modalActive = () => useState("use_modal_active", () => false);
export const useUserAuth = () => useState("use_user_auth", () => false);
export const useUserData = () => useState("use_user_data", () => {});
export const useStatus = () => useState("use_user_data", () => null);
export const useApplication = () => useState("use_application", () => []);
export const usePage = () => useState("use_page", () => 1);
export const usePageActive = () => useState("use_page_active", () => 1);
export const useInfoActive = () => useState("use_info_active", () => "application");