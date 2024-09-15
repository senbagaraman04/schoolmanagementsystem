package com.rams.smsservice.models;

import lombok.*;

/**
 * Represents a request to create a branch.
 */
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateBranchRequest {

    /**
     * Represents the name of a branch.
     */
    String branchName;

    /**
     * Represents the address of a branch.
     */
    String branchAddress;

    /**
     * Represents the phone number of a branch.
     */
    String branchPhone;
}
