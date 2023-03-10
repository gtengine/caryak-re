export class WebRoute {
  static STATION = "/station";
  // static MAIN = WebRoute.STATION + "/main";
  static MAIN = WebRoute.STATION + "/today" + "/waiting";
  static TODAY_COMPLETION = WebRoute.STATION + "/today" + "/completion";
  static TODAY_CANCEL = WebRoute.STATION + "/today" + "/cancel";
  static UNPROCESSED = WebRoute.STATION + "/unprocessed";
  static SIGN = WebRoute.STATION + "/sign";
  static PROFILE = WebRoute.STATION + "/profile";
  static STATION_POLICY = WebRoute.STATION + "/policy";
  static SETTLEMENT = WebRoute.STATION + "/settlement";
  static OTP = WebRoute.STATION + "/otp";

  static FILE_UPLOAD = WebRoute.SIGN + "/fileupload";
  static APPROVAL = WebRoute.SIGN + "/approval";

  static SIGN_UP = WebRoute.SIGN;
  static SIGN_COMPLETE = WebRoute.SIGN + "/complete";
  static SIGN_FIND = WebRoute.SIGN + "/find";
  static SIGN_FIND_AUTH = WebRoute.SIGN_FIND + "/auth";
  static SIGN_FIND_COMPLETE = WebRoute.SIGN_FIND + "/complete";
  static SIGN_FIND_PASSWORD = WebRoute.SIGN_FIND + "/password";

  static PROFILE_ACCOUNT = WebRoute.PROFILE + "/account";
  static PROFILE_AUTH = WebRoute.PROFILE_ACCOUNT + "/auth";
  static PROFILE_WITHDRAWAL = WebRoute.PROFILE + "/withdrawal";
  static PROFILE_WITHDRAWALCOMPLETION =
    WebRoute.PROFILE + "/withdrawalCompletion";
  static PROFILE_COMPANY = WebRoute.PROFILE + "/company";
  static PROFILE_COMPANY_EDIT = WebRoute.PROFILE_COMPANY + "/edit";

  static LIST_RESERVATION = WebRoute.STATION + "/reservations";
  static LIST_CONSIGNMENT = WebRoute.STATION + "/consignments";

  static SETTLEMENT_ESTIMATED = WebRoute.SETTLEMENT + "/estimated";
  static SETTLEMENT_DONE = WebRoute.SETTLEMENT + "/done";

  // admin
  static ADMIN = "/moo";
  static ADMIN_OTP = WebRoute.ADMIN + "/otp";
  static A_MAIN = WebRoute.ADMIN + "/main";
  static MAN_STATION = WebRoute.ADMIN + "/manstation";
  static REVIEW_STATION = WebRoute.ADMIN + "/reviewstation";
  static MAN_WORKER = WebRoute.ADMIN + "/manworker";
  static RESERVATION = WebRoute.ADMIN + "/reservation";
  static CONSIGNMENT = WebRoute.ADMIN + "/consignment";
  static CUSTOMER = WebRoute.ADMIN + "/customer";

  static ADMIN_SETTLEMENT = WebRoute.ADMIN + "/settlement";
  static ADMIN_SETTLEMENT_STATUS = WebRoute.ADMIN_SETTLEMENT + "/status";
  static ADMIN_SETTLEMENT_PLATFORM = WebRoute.ADMIN_SETTLEMENT + "/platform";
  static ADMIN_SETTLEMENT_STATION = WebRoute.ADMIN_SETTLEMENT + "/station";
  static ADMIN_SETTLEMENT_FINISHED = WebRoute.ADMIN_SETTLEMENT + "/finished";
}

export class MobileRoute {
  static CUSTOMER = "/";

  static M_PROFILE = MobileRoute.CUSTOMER + "profile";
  static M_WITHDRAWAL = MobileRoute.CUSTOMER + "withdrawal";

  static M_SIGN = MobileRoute.CUSTOMER + "sign";
  static M_SIGN_UP = MobileRoute.M_SIGN + "/up";

  static M_RESERVATION = MobileRoute.CUSTOMER + "reservation";
  static M_RESERVATION_LIST = MobileRoute.M_RESERVATION + "/stores";

  static M_CONSIGNMENT = MobileRoute.CUSTOMER + "consignment";
  static M_CONSIGNMENT_LIST = MobileRoute.M_CONSIGNMENT + "/stores";

  static M_RESERVED_LIST = MobileRoute.CUSTOMER + "reservedlist";
  static M_RESERVED_CHANGE = MobileRoute.M_RESERVED_LIST + "/change";

  static M_CAR_LIST = MobileRoute.CUSTOMER + "carlist";

  static MOBILE_POLICY = MobileRoute.CUSTOMER + "policy";

  static M_INFO = MobileRoute.CUSTOMER + "info";

  static M_SURVEY = MobileRoute.CUSTOMER + "survey";
}
