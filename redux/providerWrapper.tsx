'use client';

import { Provider } from 'react-redux';
import { store } from './store';

type Props = {
  readonly children: React.ReactNode;
};

export default function ProviderWrapper({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}