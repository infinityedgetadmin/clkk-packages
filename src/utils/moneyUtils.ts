// utils/usdMoneyUtils.js
import { Decimal } from "decimal.js";

/**
 * Converts cents to USD as a Decimal.
 * @param {number} cents - The amount in cents.
 * @return {Decimal} The amount in USD as a Decimal.
 */
export function convertCentsToUSD(cents: number): string {
  return new Decimal(cents).div(100).toFixed(2);
}

/**
 * Converts USD to cents as a number.
 * @param {Decimal|number|string} usd - The amount in USD.
 * @return {number} The amount in cents.
 */
export function convertUSDToCents(usd: Decimal | number | string): number {
  return new Decimal(usd).mul(100).toNumber();
}
