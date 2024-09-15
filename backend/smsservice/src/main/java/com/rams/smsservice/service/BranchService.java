/**
 * This class represents the service layer for managing branches in the school management system.
 * It provides methods to retrieve information about branches.
 */
package com.rams.smsservice.service;

import com.rams.smsservice.models.Branch;
import com.rams.smsservice.models.CreateBranchRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class BranchService {
     
    public List<Branch> getAllBranches() {       

        return  List.of(
                new Branch("1", "Branch 1", "Location 1", null, null, null, true),
                new Branch("2", "Branch 2", "Location 2", null, null, null, true)
        );
    }


    public Branch getBranchById(String branchId) {
        return new Branch(branchId, "Branch 1", "Location 1", null, null, null, true);
    }


    public Branch getBranchByCode(String branchCode) {
        return new Branch("1", "Branch 1", "Location 1", null, null, branchCode, true);
    }

  
    public Branch createBranch(CreateBranchRequest createBranchRequest) {


        //Create a Unique ID for the Branch

        /**
         * TODO: Update the Static message, to be configured from the frontend
         */
        String branchId = "SMS-" + UUID.randomUUID().toString().toUpperCase().replace("-", "").substring(0, 5);

        Branch br = new Branch().builder()
                .branchName(createBranchRequest.getBranchName())
                .branchAddress(createBranchRequest.getBranchAddress())
                .branchPhone(createBranchRequest.getBranchPhone())
                .branchId(branchId)
                .build();

        System.out.println("Branch created: " + br);

        return br;
    }

   
}
