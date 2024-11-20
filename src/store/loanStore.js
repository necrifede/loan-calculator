import { fetchLoan } from 'src/api/loan'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState = {
  fetching: false,
  borrow: {
    value: 100000,
    min: 20000,
    max: 800000
  },
  months: {
    value: 96,
    min: 24,
    max: 96
  },
  insurance: { withi: false },
  summary: {
    monthly: 0,
    interest: 0,
    apr: 0,
    insurance: 0,
    total: 0
  }
}

export const useLoanStore = create(devtools((set, get) => ({
  ...initialState,

  loanCalculation: async () => {
    set({ fetching: true })

    const amount = get().borrow.value
    const time = get().months.value
    const withInsurance = get().insurance.withi

    const { monthly, interest, apr, insurance, total } = await fetchLoan(amount, time, withInsurance)
    console.log('monthly: ', monthly)
    console.log('total: ', total)

    set({ summary: { monthly, interest, apr, insurance, total }, fetching: false })
  },

  cancelLoanCalculation: () => {},
  updateLoanValue: value => set({ borrow: { ...get().borrow, value } }),
  updateMonthsValue: value => set({ months: { ...get().months, value } }),
  updateInsurance: value => set({ insurance: { ...get().insurance, withi: value } })

})))
