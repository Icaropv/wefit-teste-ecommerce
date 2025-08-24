import { CircularProgress, type CircularProgressProps } from '@mui/material';

type LoadingProps = CircularProgressProps;

export const Loading = ({ ...rest }: LoadingProps) => {
  return <CircularProgress {...rest} className='text-gray-400'/>;
};