"use client";

import { useMemo, useState } from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import Heading from "../Heading";
import CategoryInput from "../inputs/CategoryInput";
import { CATEGORIES } from "../navbar/Categories";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}
const RentModal = (props: Props) => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const Actionlabel = useMemo(() => {
    if (step === STEPS.PRICE) return "Create";
    return "Next";
  }, [step]);

  const secondaryActionlabel = useMemo(() => {
    if (step === STEPS.CATEGORY) return undefined;
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gab-8">
      <Heading
        title="Which of these best describes your place"
        subtitle="Pick a category"
      />
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-3max-h-[50hv] overflow-y-auto">
        {CATEGORIES.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      title="Airbnb your home"
      actionLabel={Actionlabel}
      body={bodyContent}
      secondaryActionLabel={step === STEPS.CATEGORY ? undefined : onBack}
    />
  );
};
export default RentModal;
