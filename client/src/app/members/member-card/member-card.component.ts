import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { PresenceService } from 'src/app/_services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
  // encapsulation : ViewEncapsulation.None // to aplly member-card-css to eveywhere in project

})
export class MemberCardComponent implements OnInit{
  @Input() member: Member;
  
  constructor(private memberService: MembersService, private toastr: ToastrService,
    public presenceService: PresenceService) { }
    ngOnInit(): void {
      // console.log(this.member)
    }
    
    ToggleLike(member: Member) {
      if (member.liked) {
        this.removeLike(member)
      }
      else {
        this.addLike(member)
      }
  }
  
  addLike(member: Member) {
    this.memberService.addLike(member.userName).subscribe({
      next: () => {
        // this.toastr.success('You have liked ' + member.knownAs)
        this.member.liked = true;
      }
    })
  }
  removeLike(member: Member) {
    this.memberService.removeLike(member.userName).subscribe({
      next: () => {
        // this.toastr.success('you have removed like of ' + member.knownAs )
        this.member.liked = false;
      }
    })
  }

}
