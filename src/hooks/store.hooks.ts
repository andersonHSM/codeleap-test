import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../models/store/store.model";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
