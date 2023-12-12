import { useDispatch } from "react-redux";
import makes from "../../helpers/makes.json";
import prices from "../../helpers/prices.json";
import {
  filterMake,
  filterMileageFrom,
  filterMileageTo,
  filterPrice,
} from "../../redux/filter/filterSlice";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import {
  ButtonContainer,
  StyledButtonSearch,
  StyledForm,
  StyledFormWrap,
  StyledInput,
  StyledInputWrap,
  StyledLabel,
  StyledSelect,
} from "./Filters.styled";

const customStyles = {
  singleValue: (provided) => ({
    ...provided,
    color: "#171612",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "1.11",
  }),
  control: (provided) => ({
    ...provided,
    padding: "8px 10px 8px 10px ",
    boxShadow: "none",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "1.11",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#ffffff",
    color: state.isFocused ? "#000000" : "rgba(18, 20, 23, 0.20)",
  }),
};

export const Filters = () => {
  const dispatch = useDispatch();
  const { control, register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(filterMake(data.make.value));
    dispatch(filterPrice(data.price.value));
    dispatch(filterMileageFrom(data.from.replace(/\D/g, "")));
    dispatch(filterMileageTo(data.to.replace(/\D/g, "")));
    reset();
  };

  const makeOptions = makes.map((make) => ({
    value: make,
    label: make,
  }));

  const priceOptions = prices.map((price) => ({
    value: price,
    label: price,
  }));

  return (
    <StyledFormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledSelect>
          <StyledLabel htmlFor="carBrand">Car brand</StyledLabel>
          <Controller
            name="make"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={makeOptions}
                placeholder="Select make"
                styles={customStyles}
              />
            )}
          />
        </StyledSelect>
        <StyledSelect>
          <StyledLabel htmlFor="pricePerHour">Price/ 1 hour</StyledLabel>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={priceOptions}
                placeholder="To $"
                styles={customStyles}
              />
            )}
          />
        </StyledSelect>
        <StyledSelect>
          <StyledLabel>Car mileage / km</StyledLabel>
          <StyledInputWrap>
            <StyledInput
              {...register("from", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                },
              })}
              placeholder="From"
              type="text"
              maxLength={8}
            />

            <StyledInput
              {...register("to", {
                onChange: (e) => {
                  e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                },
              })}
              placeholder="To"
              type="text"
              maxLength={8}
            />
          </StyledInputWrap>
        </StyledSelect>

        <ButtonContainer>
          <StyledButtonSearch type="submit">Search</StyledButtonSearch>
        </ButtonContainer>
      </StyledForm>
    </StyledFormWrap>
  );
};
