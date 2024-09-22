package com.rams.smsservice.models;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Staff {

    String staffId;

    String staffName;

    String staffAddress;

    String staffPhone;
}
