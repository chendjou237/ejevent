import { Cart } from "@/components/component/cart";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default  function Page() {
  const t =  useTranslations('cart');

  const translations = {
    title: t('title'),
    orderSummary: {
      title: t('orderSummary.title'),
      decorations: t('orderSummary.decorations'),
      services: t('orderSummary.services'),
      total: t('orderSummary.total'),
      addReservations: t('orderSummary.addReservations'),
      startDate: t('orderSummary.startDate'),
      endDate: t('orderSummary.endDate')
    },
    personalInfo: {
      title: t('personalInfo.title'),
      name: {
        label: t('personalInfo.name.label'),
        placeholder: t('personalInfo.name.placeholder')
      },
      email: {
        label: t('personalInfo.email.label'),
        placeholder: t('personalInfo.email.placeholder')
      },
      phone: {
        label: t('personalInfo.phone.label'),
        placeholder: t('personalInfo.phone.placeholder')
      },
      confirmButton: t('personalInfo.confirmButton')
    },
    toasts: {
      creatingBooking: t('toasts.creatingBooking'),
      bookingSuccess: t('toasts.bookingSuccess'),
      bookingError: t('toasts.bookingError')
    }
  };

  return (
    <div>
      <Cart translations={translations} />
    </div>
  );
}
