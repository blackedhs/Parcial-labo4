import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorlistadoComponent } from './actorlistado.component';

describe('ActorlistadoComponent', () => {
  let component: ActorlistadoComponent;
  let fixture: ComponentFixture<ActorlistadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorlistadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorlistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
