// useReport.ts
import { useEffect, useState } from 'react';
import { fetchReportData } from '../api/apiService';
import { Report } from '../types/report';

export const useReport = () => {
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchReportData(token);
        setReport(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { report, error, loading };
};
