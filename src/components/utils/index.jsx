
export const iqCalculator = (score , totalQues )=>{

    const percentage = (score/totalQues) * 100;
    
    if (percentage >= 90) {
        return "130 and above Very Superior";
      } else if (percentage >= 80) {
        return "120–129 Superior";
      } else if (percentage >= 70) {
        return "110–119	High Average";
      } else if (percentage >= 50) {
        return "90–109 Average";
      } else if (percentage >= 40) {
        return "80–89 Low Average";
      } else if (percentage >= 30) {
        return "70–79 Borderline";
      } else {
        return "69 and below Extremely Low";
      }

}
