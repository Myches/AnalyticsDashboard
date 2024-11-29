
import axios from 'axios';
import { ApiResponse } from '../types/report';




const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchReportData = async (token: string) => {
  try {
    const response = await axios.get<ApiResponse>(
      `${BASE_URL}/report/summary/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || 'Failed to fetch report');
  }
};



export const logoutUser = async (token: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/logout`, 
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error('Error during logout:', err);
      throw new Error('Logout failed.');
    }
  };