import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import mockData from '@/public/data/mock-agents.json';

type Agent = typeof mockData[0];

interface AgentState {
  agents: Agent[];
  loading: boolean;
}

const initialState: AgentState = {
  agents: [],
  loading: true,
};

export const fetchAgents = createAsyncThunk('agents/fetch', async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return mockData;
});

const agentSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAgents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAgents.fulfilled, (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload;
      state.loading = false;
    });
  },
});

export default agentSlice.reducer;
