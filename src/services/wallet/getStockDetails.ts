import { STOCK_DETAILS, WALLET } from "@/static/links";
import requestService from "../../static/requests";
export async function GetStockDetails(token: string, id: string) {
  const response = await requestService.get(STOCK_DETAILS + "/" + id, token);
  return response!["data"]["data"];
}
