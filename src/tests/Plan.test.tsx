/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers

import Plan from '../components/Plan';

describe('Plan Component', () => {
  it('should render with monthly plans initially', () => {
    const { getByText, getAllByText } = render(<Plan />);

    // Check the "monthly" tab is initially active
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('monthly')).toHaveClass('bg-[#E1A6FF66] rounded-lg');
    expect(getByText('yearly')).not.toHaveClass('bg-[#E1A6FF66] rounded-lg');

    // Check if monthly plans are rendered
    const monthlyPlanTitles = getAllByText(/Basic Plan/i);
    expect(monthlyPlanTitles.length).toBe(3);
  });

  it('should switch between monthly and yearly plans', () => {
    const { getByText, getAllByText } = render(<Plan />);

    // Click the "yearly" tab
    fireEvent.click(getByText('yearly'));

    // Check the "yearly" tab is now active
    expect(getByText('monthly')).not.toHaveClass('bg-[#E1A6FF66] rounded-lg');
    expect(getByText('yearly')).toHaveClass('bg-[#E1A6FF66] rounded-lg');

    // Check if yearly plans are rendered
    const yearlyPlanTitles = getAllByText(/Basic Plan/i);
    expect(yearlyPlanTitles.length).toBe(3);
  });

  // Add more tests here for specific interactions, buttons, etc.
});
