import Swal, { SweetAlertIcon } from "sweetalert2";

const ToastAlert = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const showAlert = (icon: SweetAlertIcon, title: string) => {
  ToastAlert.fire({
    icon: icon,
    title: title,
  });
};

export default showAlert;
