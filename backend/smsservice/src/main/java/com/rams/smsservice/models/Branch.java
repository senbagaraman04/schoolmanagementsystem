package com.rams.smsservice.models;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.Builder;

/**
 * Represents a Branch entity with details such as ID, name, address, phone, code and email.
 * Utilizes Lombok annotations for boilerplate code reduction.
 */
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Branch {

    /**
     * Unique identifier for the branch.
     */
    String branchId;

    /**
     * Name of the branch.
     */
    String branchName;

    /**
     * Address of the branch.
     */
    String branchAddress;

    /**
     * Phone number of the branch.
     */
    String branchPhone;

    /**
     * Email address of the branch.
     */
    String branchEmail;

    /**
     * Code of the branch.
     */
    String branchCode;

    @Builder.Default
    Boolean isActive = true;
}