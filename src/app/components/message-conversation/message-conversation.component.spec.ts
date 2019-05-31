import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageConversationComponent } from './message-conversation.component';

describe('MessageConversationComponent', () => {
  let component: MessageConversationComponent;
  let fixture: ComponentFixture<MessageConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
